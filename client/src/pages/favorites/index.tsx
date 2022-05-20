import { FavoriteCard } from '../../components/favoriteCard';
import { NavigationBar } from '../../components/navigationBar';
import styles from './styles.module.scss';

export const FavoritesPage = () => {
  return <div className={styles.FavoritesPage}>
    <FavoriteCard />
    <FavoriteCard />
    <NavigationBar />
  </div>;
};