import faunadb from 'faunadb';
import CryptoJS from 'crypto-js';

const q = faunadb.query;

const client = new faunadb.Client({
    secret: process.env.VUE_APP_FAUNADB_SECRET,
    domain: "db.eu.fauna.com"
});


const getUser = (email, password) => {
    const userData = client.query(
        q.Get(
            q.Match(
                q.Index("user_by_email"),
                [email, password]
            )
        )
    )
    .catch((err) => {
        if (err.requestResult.statusCode == 404) {
            return null
        }
    })

    return userData
}

const createUser =  (userName, email, password) => {
    getUser(email) // Check if user already exsist
    .then((data) => {
        if (data != null) return

        console.log("pass");

        const hash = CryptoJS.SHA1(password).toString();
    
        client.query(
            q.Create(q.Collection("users"), {
                data: {
                    username: userName,
                    email: email,
                    password: hash
                }
              })
        )
        .catch((err) => console.error('Error: %s', err))
    })

}

const matchPass = (hash, pass) => {
    const password = CryptoJS.SHA1(pass).toString();

    return hash == password;
}


/*client.setAvatar = async (uuid, avatar) => {
    await redis.hset('avatar', uuid, {
        'b64': avatar
    })
}

client.setCard = async (uuid, card) => {
    await redis.hset('card', uuid, {
        'b64': card
    })
}

client.getAvatar = async (uuid) => {
    const avatar = JSON.parse(await redis.hget('avatar', uuid));
    return avatar ? avatar : null;
}

client.getCard = async (uuid) => {
    const card = JSON.parse(await redis.hget('card', uuid));
    return card ? card : null;
}

client.getUserUUID = async (uuid) => {
    const user = JSON.parse(await redis.hget('user', uuid));
    return user ? user : null;
}

client.getUserByEmail = async (email) => {
    const user = JSON.parse(await redis.hget('user', ))
}

client.checkPass = (plainPass, passHash) => {
    return bcrypt.compare(plainPass, passHash);
}
*/
export { createUser, getUser, matchPass };
