import type { Comment } from '@/types/comment';
import User1 from '@/assets/images/users/User1.png';
import User2 from '@/assets/images/users/User2.png';
import User3 from '@/assets/images/users/User3.png';
import User4 from '@/assets/images/users/User4.png';

export const COMMENTS: Comment[] = [
  {
    comment: 'Necesitaba fotos profesionales de mis productos para la tienda online y realmente marcaron la diferencia. Ahora se ven mucho más atractivos y las ventas han aumentado.',
    rating: 5,
    userName: 'Carolina Torres',
    userInfo: 'Emprendedora de e-commerce',
    userPhoto: User1,
  },
  {
    comment:
      'Contratamos a Visual Studio para las fotos de un evento corporativo y quedamos encantados. Capturaron momentos claves sin interrumpir la dinámica, y las fotos transmiten justo la energía que queríamos mostrar.',
    rating: 5,
    userName: 'Luis Ramírez',
    userInfo: 'Gerente de Marketing',
    userPhoto: User2,
  },
  {
    comment: 'Trabajamos juntos en la producción de un podcast y fue excelente. El resultado final quedó muy profesional, con un sonido impecable y un montaje que superó mis expectativas.',
    rating: 5,
    userName: 'Javier Paredes',
    userInfo: 'Consultor empresarial',
    userPhoto: User3,
  },
  {
    comment: 'Me gustó mucho la cercanía del equipo, siempre atentos a cada detalle. Hicieron de un evento familiar un recuerdo precioso, natural y lleno de vida.',
    rating: 5,
    userName: 'María Fernanda López',
    userInfo: 'Organizadora de eventos sociales',
    userPhoto: User4,
  },
];
