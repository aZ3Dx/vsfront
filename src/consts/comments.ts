import type { Comment } from '@/types/comment';
import CAROLINA from '@/assets/images/users/CAROLINA.webp';
import MOISES from '@/assets/images/users/MOISES.webp';
import XIOMARA from '@/assets/images/users/XIOMARA.webp';
import CARMEN from '@/assets/images/users/CARMEN.webp';

export const COMMENTS: Comment[] = [
  {
    comment:
      'He contratado a Visual Studio en dos ocasiones para mis fotos de marca personal y la experiencia ha sido excepcional en ambas. Lo que más valoro es su rapidez en la entrega sin sacrificar la calidad del trabajo, además de su trato amable y cercano que hace que cada sesión sea muy cómoda. Confío tanto en su trabajo que constantemente los refiero con mis clientes y he recomendado sus servicios entre los miembros de mi asociación.',
    rating: 5,
    userName: 'Carolina Coda',
    userInfo: 'Gerente Marketing AICI',
    userPhoto: CAROLINA,
  },
  {
    comment:
      'Contraté a Visual Studio porque buscaba un equipo responsable con buenas herramientas para la creación de mi Podcast. Y han reflejado tal cual la visión que teníamos para el proyecto. Lo recomiendo 100%.',
    rating: 5,
    userName: 'Moises Pino',
    userInfo: 'Gerente Marketing Cliniderma',
    userPhoto: MOISES,
  },
  {
    comment:
      'Vengo trabajando con Visual Studio más de 5 años y la calidad de trabajo es excelente, el trato y sobre todo que entienden lo que busca uno en cada sesión . Resalto siempre su profesionalismo y su eficacia para la entrega de material solicitado. Yo sólo trabajo con ellos ya que tienen toda mi confianza.',
    rating: 5,
    userName: 'Xiomara Meza',
    userInfo: 'CEO de Luka Infusiones',
    userPhoto: XIOMARA,
  },
  {
    comment:
      'Llegamos a Visual Studio por redes sociales y apostamos por una nueva opción y no pudimos haber tomado una mejor decisión, desde el ambiente para tomar fotos, muy profesional, hasta la persona detrás del lente, nos hizo sentir muy cómodos al momento de tomar fotos para nuestra empresa.',
    rating: 5,
    userName: 'Carmen Montalvo',
    userInfo: 'CEO de BAOZ',
    userPhoto: CARMEN,
  },
];
