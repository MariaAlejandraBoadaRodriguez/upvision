// header.tsx
import Image from 'next/image';
import UserFactory from '../utils/userFactory';
import styles from './layout.module.css';

const Header = () => {
  const users = [
        UserFactory.createUser(2, 'Azpilicueta', '/images/azpilicueta.png'),
        UserFactory.createUser(3, 'Barrios', '/images/barrios.png'),
        UserFactory.createUser(4, 'Gavi', '/images/gavi.png'),
        UserFactory.createUser(5, 'Yamal', '/images/yamal.png'),
        UserFactory.createUser(6, 'Bellingham', '/images/bellingham.png'),
        UserFactory.createUser(7, 'Camavinga', '/images/camavinga.png'),
        UserFactory.createUser(8, 'Courtois', '/images/courtois.png'),
        UserFactory.createUser(9, 'Casado', '/images/casado.png'),
        UserFactory.createUser(10, 'Fati', '/images/fati.png'),
        UserFactory.createUser(11, 'Gallagher', '/images/gallagher.png'),
        UserFactory.createUser(12, 'De Paul', '/images/de_paul.png'),
        UserFactory.createUser(13, 'Fermin', '/images/fermin.png'),
        UserFactory.createUser(14, 'Gavi', '/images/gavi.png'),
        UserFactory.createUser(15, 'Gomis', '/images/gomis.png'),
        UserFactory.createUser(16, 'Mestre', '/images/mestre.png'),
        UserFactory.createUser(17, 'Toni', '/images/toni.png'),
        UserFactory.createUser(18, 'Ramon', '/images/ramon.png'),
        UserFactory.createUser(19, 'Raphinha', '/images/raphinha.png'),
        UserFactory.createUser(20, 'Kyliam', '/images/kyliam.png'),
    ];

    return (
        <div className={styles['user-container']}>
          {users.map((user) => (
            <div key={user.id} className={styles['user-avatar']}>
              <Image src={user.avatar} alt={user.name} width={50} height={50} />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      );
    };
    
export default Header;