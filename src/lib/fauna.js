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

const login = (email, password) => {
    return client.query(
        q.Login(
            q.Select("ref", q.Get(
                q.Match(q.Index("user_by_email"), email)
            )),
            { password: password }
        )
    )
}

const logout = () => {
    return client.query(
        q.logout(true)
    )
}

const createUser = (userName, email, password) => {
    emailIsTaken(email)
    .then(() => {
        console.log("Email already taken");
        return "Email already taken"
    })
    .catch((reason) => {
        if (reason.name != "NotFound") throw reason

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
    })
}

export { createUser, login, logout, currentUser, checkIdentify };
