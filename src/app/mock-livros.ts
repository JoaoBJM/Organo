import { Livro } from "./componentes/livro/livro";

export const livros: Livro[] = [
  {
    titulo: 'Como Eu Era Antes de Você ',
    autoria: ' Jojo Moyes',
    genero: { id: 'romance', value: 'Romance', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/content?id=3wohEJsBaI0C&hl=pt-BR&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1fw9rBggzSoN4pksKz8bpGSqbfPA&w=1280', // edição brasileira oficial :contentReference[oaicite:1]{index=1}
  },
  {
    titulo: ' O Senhor dos Anéis: A Sociedade do Anel',
    autoria: ' J.R.R. Tolkien',
    genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/81MZ8OjmQrL._SL1296_.jpg', // já original válida
  },
  {
    titulo: '1984',
    autoria: 'George Orwell',
    genero: { id: 'ficcao-cientifica', value: 'Ficção Científica', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/publisher/content?id=MnoGEAAAQBAJ&hl=pt-BR&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1BLaiVJIEm2fCSC-pwXTBlzltVdw&w=1280', // capa oficial :contentReference[oaicite:2]{index=2}
  },
  {
    titulo: 'Estruturas de dados',
    autoria: 'Loiane Groner',
    genero: { id: 'tecnicos', value: 'Técnicos', livros: [] },
    favorito: false,
    imagem: 'https://covers.openlibrary.org/b/id/12532765-L.jpg', // parece ok
  },
  {
    titulo: 'Lógica de programação',
    autoria: 'Edecio Fernando',
    genero: { id: 'tecnicos', value: 'Técnicos', livros: [] },
    favorito: false,
    imagem: 'https://covers.openlibrary.org/b/id/13237009-L.jpg', // ok
  },
  {
    titulo: 'Cangaceiro JavaScript',
    autoria: 'Flavio Almeida',
    genero: { id: 'tecnicos', value: 'Técnicos', livros: [] },
    favorito: false,
    imagem: 'https://covers.openlibrary.org/b/id/13237148-L.jpg', // ok
  },
  {
    titulo: 'Fahrenheit 451',
    autoria: 'Ray Bradbury',
    genero: { id: 'ficcao-cientifica', value: 'Ficção Científica', livros: [] },
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/41PVVpQf-sL._SY445_SX342_ControlCacheEqualizer_.jpg', // ok
  },
  {
    titulo: 'Admirável mundo novo',
    autoria: 'Aldous Huxley',
    genero: { id: 'ficcao-cientifica', value: 'Ficção Científica', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/publisher/content?id=FfX-AgAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U23C3XVvrfoN8Jp5LE3cz-TChQOow&w=1280', // ok
  },
  {
    titulo: 'JavaScript - o guia definitivo',
    autoria: 'David Flanagan',
    genero: { id: 'tecnicos', value: 'Técnicos', livros: [] },
    favorito: false,
    imagem: 'https://covers.openlibrary.org/b/id/13448285-L.jpg', // ok
  },
  {
    titulo: 'Angular Design Patterns and Best Practices',
    autoria: 'Alvaro Camillo',
    genero: { id: 'tecnicos', value: 'Técnicos', livros: [] },
    favorito: false,
    imagem: 'https://covers.openlibrary.org/b/id/13236833-L.jpg', // ok
  },
  {
    titulo: 'O mágico de Oz',
    autoria: 'L. Frank Baum',
    genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/publisher/content?id=tW_TDwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0WhCVwKcdUWGhfKPy_oem-PsVHPA&w=1280', // ok
  },
  {
    titulo: 'Alice no país das maravilhas',
    autoria: 'Lewis Carroll',
    genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/41aZKys9KkL._SY445_SX342_ControlCacheEqualizer_.jpg', // ok
  },
  {
    titulo: 'A revolução dos bichos',
    autoria: 'George Orwell',
    genero: { id: 'ficcao-cientifica', value: 'Ficção Científica', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/publisher/content?id=KgBBEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1ynSx0_79agHG6yXxsQmkuxljM6w&w=1280', // ok
  },
  {
    titulo: 'O Morro dos Ventos Uivantes',
    autoria: 'Emily Brontë',
    genero: { id: 'romance', value: 'Romance', livros: [] },
    favorito: false,
    imagem: 'https://books.google.com.br/books/publisher/content?id=Eg0zEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1CTdmlcTMfH_W6oCcGPvH6w_rktQ&w=1280', // ok
  },
  {
    titulo: 'Orgulho e Preconceito',
    autoria: 'Jane Austen',
    genero: { id: 'romance', value: 'Romance', livros: [] },
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/719esIW3D7L._SL1297_.jpg', // ok
  }
];
