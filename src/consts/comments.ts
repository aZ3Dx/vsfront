import type { Comment } from '@/types/comment';
import User1 from '@/assets/images/users/User1.png';
import User2 from '@/assets/images/users/User2.png';
import User3 from '@/assets/images/users/User3.png';
import User4 from '@/assets/images/users/User4.png';

export const COMMENTS: Comment[] = [
  {
    comment:
      'He contratado a Visual Studio en dos ocasiones para mis fotos de marca personal y la experiencia ha sido excepcional en ambas. Lo que más valoro es su rapidez en la entrega sin sacrificar la calidad del trabajo, además de su trato amable y cercano que hace que cada sesión sea muy cómoda. Confío tanto en su trabajo que constantemente los refiero con mis clientes y he recomendado sus servicios entre los miembros de mi asociación. Es un equipo profesional que cumple con lo que promete y supera las expectativas. Sin duda seguiré trabajando con ellos y recomendándolos.',
    rating: 5,
    userName: 'Carolina Coda',
    userInfo: 'Cargo o Info extra',
    userPhoto: User1,
  },
  {
    comment:
      'Contraté a Visual Studio porque buscaba un equipo responsable con buenas herramientas para la creación de mi Podcast. Y han reflejado tal cual la visión que teníamos para el proyecto. Lo recomiendo 100%.',
    rating: 5,
    userName: 'Moises Pino',
    userInfo: 'Cargo o Info extra',
    userPhoto: User2,
  },
  {
    comment:
      'Vengo trabajando con Visual Studio más de 5 años y la calidad de trabajo es excelente, el trato y sobre todo que entienden lo que busca uno en cada sesión . Resalto siempre su profesionalismo y su eficacia para la entrega de material solicitado. Yo sólo trabajo con ellos ya que tienen toda mi confianza.',
    rating: 5,
    userName: 'Xiomara Meza',
    userInfo: 'Gerente Comercial Luka Infusiones',
    userPhoto: User3,
  },
  {
    comment:
      'Me gustó mucho la cercanía del equipo, siempre atentos a cada detalle. Hicieron de un evento familiar un recuerdo precioso, natural y lleno de vida.',
    rating: 5,
    userName: 'María Fernanda López',
    userInfo: 'Organizadora de eventos sociales',
    userPhoto: User4,
  },
];
