export interface Clientes {
    id:number;
    nombre:string;
    genero:string;
    pais:string;
    ciudad:string;
}
export let ListaClientes:Array<Clientes>=[
    {   id:1,
        nombre:"Pepita Cruz",
        genero: "Mujer",
        pais: "Chile",
        ciudad:"Valparaiso",
    },
    {   id:2,
        nombre:"Juan Totto",
        genero: "Hombre",
        pais: "Chile",
        ciudad:"Metropolitana",
    },
    {   id:3,
        nombre:"Pedro Tijuana",
        genero: "Otro",
        pais: "Chile",
        ciudad:"Metropolitana",
    },
    {   id:4,
        nombre:"Juana De Arco",
        genero: "Mujer",
        pais: "Chile",
        ciudad:"Valparaiso",
    }
    ];
