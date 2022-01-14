import faunadb from 'faunadb';

const q = faunadb.query;

const client = new faunadb.Client({
    secret: process.env.VUE_APP_FAUNADB_SECRET,
    domain: "db.eu.fauna.com"
});


const checkIdentify = () => {
    return client.query(
        q.HasCurrentIdentity()
    )
}

const currentUser = () => {
    return client.query(
        q.CurrentIdentity()
    )
}

const emailIsTaken = (email) => {
    return client.query(
        q.IsRef(
            q.Select(
                "ref",
                q.Get(
                    q.Match(
                        q.Index("user_by_email"),
                        email
                        )
                    )
                )
            )
    )
}

const identify = (email, password) => {
    client.query(
        q.Identify(
            q.Select(
                "ref",
                q.Get(
                    q.Match(
                        q.Index("user_by_email"),
                        email
                        )
                    )
                ),
            password
        )
    )
}

const createUser =  (userName, email, password) => {
    emailIsTaken(email)
    .then((resp) => {
        if (resp) return
        else {
            client.query(
                q.Create(q.Collection("users"), {
                    credentials: {
                        password: password
                    },
                    data: {
                        username: userName,
                        email: email
                    }
                })
            )
            .catch((err) => console.error('Error: %s', err))
        }
    })
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
export { createUser, identify, currentUser, checkIdentify };
