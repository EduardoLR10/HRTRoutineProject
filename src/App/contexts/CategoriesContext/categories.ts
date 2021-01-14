import Category from '../../../models/Category'

export default [
  new Category('cardiologia', 'Cardiologia', 0),
  new Category('emergencia', 'Emergência e Terapia Intensiva', 30),
  new Category('endocrinologia', 'Endocrinologia', 60),
  new Category('gastroenterologia', 'Gastroenterologia', 330),
  new Category(
    'hematologia-reumatologia-nefrologia',
    'Hematologia, Reumatologia e Nefrologia',
    120
  ),
  new Category('infectologia', 'Infectologia', 150),
  new Category('lactentes', 'Lactentes', 180),
  new Category('neonatologia', 'Neonatologia', 210),
  new Category('neurologia', 'Neurologia', 240),
  new Category('pediatria-puericultura', 'Pediatria Geral e Puericultura', 270),
  new Category('pneumologia', 'Pneumologia', 300)
]
