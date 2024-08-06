const router = require('express').Router()

router.use('/api/users', (req, resp, next) => {
    resp.json({
        messages: "sucessfully redirected  to user service "
    })
})

module.exports = router