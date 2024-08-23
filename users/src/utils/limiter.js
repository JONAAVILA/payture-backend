import rateLimit from 'express-rate-limit';

export const limiterCodes = rateLimit({
    windowMs:24*60*60*1000,
    max:3,
    message:'To many codes request, try again later'
})

export const limiterLogin = rateLimit({
    windowMs:30*60*1000,
    max:10,
    message:'To many request, try again later'
})