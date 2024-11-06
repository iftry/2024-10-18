(() => {
  //IIFE function

  // Data structure for book inventory
  // 1. Sąrašo sukūrimas
  const inventory = [
    {
      category: "Informacinės technologijos",
      books: [
        {
          title: "Programavimas linksmai",
          ISBN: "IT-12345",
          publishing_year: 2019,
          pages: 250,
          quantity: 12,
          price: 25,
        },
        {
          title: "Clean Code",
          ISBN: "IT-54321",
          publishing_year: 2015,
          pages: 300,
          quantity: 6,
          price: 20,
        },
        {
          title: "The Pragmatic Programmer",
          ISBN: "IT-98765",
          publishing_year: 2010,
          pages: 200,
          quantity: 3,
          price: 15,
        },
        {
          title: "Code: The Hidden Language",
          ISBN: "IT-56789",
          publishing_year: 2005,
          pages: 150,
          quantity: 9,
          price: 10,
        },
        {
          title: "Code Complete",
          ISBN: "IT-01478",
          publishing_year: 2024, //New book
          pages: 100,
          quantity: 15,
          price: 5,
        },
      ],
    },
    {
      category: "Fantastika",
      books: [
        {
          title: "Circe",
          ISBN: "F-12345",
          publishing_year: 2024, //New book
          pages: 222,
          quantity: 11,
          price: 22,
        },
        {
          title: "Palaidotas milžinas",
          ISBN: "F-54321",
          publishing_year: 1980,
          pages: 333,
          quantity: 22,
          price: 33,
        },
        {
          title: "Naktinis cirkas",
          ISBN: "F-98765",
          publishing_year: 1990,
          pages: 444,
          quantity: 33,
          price: 44,
        },
        {
          title: "The Changeling",
          ISBN: "F-56789",
          publishing_year: 1995,
          pages: 555,
          quantity: 44,
          price: 55,
        },
        {
          title: "Vandeskyros kalva",
          ISBN: "F-01478",
          publishing_year: 2000,
          pages: 666,
          quantity: 55,
          price: 66,
        },
      ],
    },
    {
      category: "Historical Fiction",
      books: [
        {
          title: "Neregimoji šviesa",
          ISBN: "HF-12345",
          publishing_year: 2024, //New book
          pages: 350,
          quantity: 9,
          price: 37,
        },
        {
          title: "Wolf Hall",
          ISBN: "HF-54321",
          publishing_year: 2015,
          pages: 300,
          quantity: 33,
          price: 39,
        },
        {
          title: "The Nightingale",
          ISBN: "HF-98765",
          publishing_year: 2010,
          pages: 400,
          quantity: 16,
          price: 43,
        },
        {
          title: "Pachinko",
          ISBN: "HF-56789",
          publishing_year: 2005,
          pages: 299,
          quantity: 19,
          price: 48,
        },
        {
          title: "Žemės stulpai",
          ISBN: "HF-01478",
          publishing_year: 2000,
          pages: 250,
          quantity: 13,
          price: 50,
        },
      ],
    },
    {
      category: "Science Fiction",
      books: [
        {
          title: "Dune",
          ISBN: "SF-12345",
          publishing_year: 2001,
          pages: 500,
          quantity: 5,
          price: 10,
        },
        {
          title: "Hyperion",
          ISBN: "SF-54321",
          publishing_year: 2006,
          pages: 400,
          quantity: 10,
          price: 15,
        },
        {
          title: "Neuromancer",
          ISBN: "SF-98765",
          publishing_year: 2011,
          pages: 300,
          quantity: 15,
          price: 20,
        },
        {
          title: "Marsietis",
          ISBN: "SF-56789",
          publishing_year: 2016,
          pages: 100,
          quantity: 20,
          price: 25,
        },
        {
          title: "Kairioji tamsos ranka",
          ISBN: "SF-01478",
          publishing_year: 2024, //New book
          pages: 200,
          quantity: 25,
          price: 30,
        },
      ],
    },
    {
      category: "Mystery & Thriller",
      books: [
        {
          title: "The Housemain",
          ISBN: "MT-12345",
          publishing_year: 2015,
          pages: 400,
          quantity: 9,
          price: 10,
        },
        {
          title: "Passions in Death",
          ISBN: "MT-54321",
          publishing_year: 2020,
          pages: 450,
          quantity: 9,
          price: 20,
        },
        {
          title: "The Silent Patient",
          ISBN: "MT-98765",
          publishing_year: 2024, //New book
          pages: 250,
          quantity: 15,
          price: 30,
        },
        {
          title: "Gone Girl",
          ISBN: "MT-56789",
          publishing_year: 2010,
          pages: 300,
          quantity: 30,
          price: 40,
        },
        {
          title: "Verity",
          ISBN: "MT-01478",
          publishing_year: 2005,
          pages: 500,
          quantity: 2,
          price: 50,
        },
      ],
    },
  ];

  
  // 2. Išvedami knygu pavadinimai ir pažymimos naujos (2024 metų) knygos 


  for (let item of inventory) {
    for (let value of item.books) {
      console.log(value.title);
      if(value.publishing_year == 2024){
        console.log(value.publishing_year + " New book")
      }
      else
      console.log(value.publishing_year);
      console.log("---------------------");
    }
    
  }

  // nepavyko prideti funkcijos

  // function newBook() {
  //   if(value.publishing_year == 2024){
  //     console.log(value.publishing_year + " New book")
  //   }
  //   else
  //   console.log(value.publishing_year)
  // }

  // 3. a) For each book, calculate the total value by multiplying the price by the quantity.

  

 
    for (let item of inventory) {
      for (let value of item.books) {
        console.log(value.title);
        console.log("Price = " + value.price + "EUR");
        console.log("Quantity = " + value.quantity);
        console.log(`Total Value = ${value.price} * ${value.quantity} = ${value.price * value.quantity} EUR`);
        console.log("-----------------------");
      }
    }

 // 3. b) For each category, sum the values of all books to get the total value of the category.


  let sum = 0;
  let bookValue = 0;
  for (let item of inventory) {
    console.log(item.category)
     for(let value of item.books) {
        bookValue = value.price * value.quantity
        sum += bookValue
    }
    console.log("Category value: " + sum)
  }
  console.log("--------------------")


 // 3. c) calculate the overall inventory value by summing the total values of all categories.

 let total = 0;
 let categoryTotal = 0;
 let eachBookValue = 0;
 for (let item of inventory) {
    for(let value of item.books) {
      eachBookValue = value.price * value.quantity
      categoryTotal += eachBookValue
   }
   total += categoryTotal
 }
 console.log("Inventory total value: " + total)



  ///...nepabaigta

})();
