import Config from '.'
import mongoose from 'mongoose'

export default class DBConnection {
  static connect () {
    lhtWebLog('connect', `DB trying to connect on ${new Date()} to url ${Config.DB}`, {}, 'AyushK');

    const options = {
      keepAlive: 1,
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    return mongoose.connect(Config.DB, options)
  }
}
