const router = require('express').Router()
const authRoute = require('./auth/auth.route')

router.use('/api/users/auth', authRoute)

router.use('/api/users', (req, resp, next) => {
    resp.json({
        messages: "sucessfully redirected  to user service "
    })
})

module.exports = router