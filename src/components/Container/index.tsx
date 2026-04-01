import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};
// ESSE COMPONENTE RESPONSÁVEL POR EXIBIR OS ELEMENTOS FILHOS(children)
export function Container({ children }: ContainerProps) {
  return (
    <>
      {/*LOGO*/}
      <div className={styles.container}>
        <div className={styles.content}>
            {children}          
        </div>
      </div>
    </>
  );
}
