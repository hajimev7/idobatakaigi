import crypt from 'crypto'

export const gravatarPath=(string)=>{
    const lowerCaseString= string.trim().toLowerCase();
    const md5= crypt.createHash('md5')
    const digest= md5.update(lowerCaseString,'binary').digest('hex')
    return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
}