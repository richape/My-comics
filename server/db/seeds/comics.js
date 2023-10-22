export async function seed(knex) {
  await knex('comics').del()
  await knex('comics').insert([
    {
      id: 1,
      title: 'The Last Ronin',
      name: 'Teenage Mutant Ninja Turtles',
      issue: 'One',
      datePublished: '2020-10-28',
      publisher: 'IDW Publishing',
      credits: 'Kevin Eastman, Peter Laird, Tom Waltz',
      coverArt: '',
      coverArtist:
        'Esau Escorza, Issac Escorza, Kevin Eastman, Mateus Santolouco',
    },
    {
      id: 2,
      title: 'The Last Ronin',
      name: 'Teenage Mutant Ninja Turtles',
      issue: 'Two',
      datePublished: '2021-02-17',
      publisher: 'IDW Publishing',
      credits: 'Kevin Eastman, Peter Laird, Tom Waltz',
      coverArt: '',
      coverArtist:
        'Esau Escorza, Issac Escorza, Kevin Eastman, Mateus Santolouco',
    },
    {
      id: 3,
      title: 'The Last Ronin',
      name: 'Teenage Mutant Ninja Turtles',
      issue: 'Three',
      datePublished: '2021-05-26',
      publisher: 'IDW Publishing',
      credits: 'Kevin Eastman, Peter Laird, Tom Waltz',
      coverArt: '',
      coverArtist:
        'Esau Escorza, Issac Escorza, Kevin Eastman, Mateus Santolouco',
    },
    {
      id: 4,
      title: 'The Last Ronin',
      name: 'Teenage Mutant Ninja Turtles',
      issue: 'Four',
      datePublished: '2021-09-22',
      publisher: 'IDW Publishing',
      credits: 'Kevin Eastman, Peter Laird, Tom Waltz',
      coverArt: '',
      coverArtist: 'Esau Escorza, Issac Escorza, Dave Wachter',
    },
    {
      id: 5,
      title: 'The Last Ronin',
      name: 'Teenage Mutant Ninja Turtles',
      issue: 'Five',
      datePublished: '2022-04-27',
      publisher: 'IDW Publishing',
      credits: 'Kevin Eastman, Peter Laird, Tom Waltz',
      coverArt: '',
      coverArtist: 'Esau Escorza, Issac Escorza, Ben Bishop, Kevin Eastman',
    },
    {
      id: 6,
      title: '',
      name: '',
      issue: '',
      datePublished: '',
      publisher: '',
      credits: '',
      coverArt: '',
    },
  ])
}
