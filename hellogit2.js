console.log('Hello git')

class Personas{
    //Create construct
    constructor({
        nombre,
        Lastname,
        age,
        Alias = []
    })
    // save and referenciamos
    {
        this.nombre = nombre;
        this.Lastname =Lastname;
        this.age = age;
        this.Alias = Alias;
    }
}

//Instanciamos
const Arturo = new Personas({
    nombre:'Arturo',
    Lastname: 'Israel',
    age : 23,
    Alias : 'EL pro'
})

console.log(Arturo)