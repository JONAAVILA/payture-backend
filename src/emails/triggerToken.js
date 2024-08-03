
function token (){
    const t = Math.floor(100000 + Math.random() * 900000).toString();
    const first = t.split("").slice(0,3).join("")
    const last = t.split("").slice(3,6).join("")
    return `${first}-${last}`
}

export default token;