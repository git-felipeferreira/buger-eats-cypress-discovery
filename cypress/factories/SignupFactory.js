var faker = require ('faker')
var cpf = require ('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '16996349690',
            address: {
                postalcode: '14806763',
                street: 'Rua Matteo Donato',
                district: 'Jardim Adalberto Frederico de Oliveira Roxo I',
                city_state: 'Araraquara/SP',
                number: '110'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data 

    }

}