import Redis from 'ioredis';
import { v5 as uuidv5 } from 'uuid';
import { bcrypt } from 'bcrypt';

const redis = new Redis(process.env.REDIS_URL);

redis.createUser = async (userName, password, email, description, card) => {
    const uuid = uuidv5();
    const avatarId = uuidv5();
    const cardId = uuidv5();

    const salt = bcrypt.genSaltSync(10);
    const passHash = bcrypt.hashSync(password, salt);

    await redis.hset('avatar', avatarId, {
        'uuid': uuid,
        'b64': card
    })

    await redis.hset('card', cardId, {
        'uuid': uuid,
        'b64': card
    }) 

    await redis.hset('user', uuid, {
        'passwordHash': passHash,
        "email": email,
        'userName': userName,
        'description': description,
        'avatarId': avatarId,
        'cardId': cardId
    })
}

redis.getAvatar = async (uuid) => {
    const avatar = JSON.parse(await redis.hget('avatar', uuid));
    return avatar ? avatar : null;
}

redis.getCard = async (uuid) => {
    const card = JSON.parse(await redis.hget('card', uuid));
    return card ? card : null;
}

redis.getUser = async (uuid) => {
    const user = JSON.parse(await redis.hget('user', uuid));
    return user ? user : null;
}

redis.checkPass = (plainPass, passHash) => {
    return bcrypt.compare(plainPass, passHash);
}

export default redis;
