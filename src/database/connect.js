import mongoose from 'mongoose';
const connectData = async () =>{
  await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@firstapi.ivagrn0.mongodb.net/?retryWrites=true&w=majority`)
  .then(console.log('Banco de dados conectado com sucesso!'))
  .catch (err =>{
    console.log('Não foi possível conectar ao banco de dados.', err);
  })
}

export default connectData;