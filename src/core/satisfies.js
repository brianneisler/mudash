import defn from './defn'
const satisfies = defn((protocol, value) => protocol.is(value))
export default satisfies
