import styles from '../src/styles/Issue.module.css';
import IssuePage from '../public/images/issue/issue1.svg';
import IssuePage2 from '../public/images/issue/issue3.svg';
import IssueTest from '../src/components/issue/TestCom';

function Issue() {
  const adjust = () => {
    const clas = document.getElementsByClassName('divide');

    const poly = document.getElementsByTagName('polygon');
    const line = document.getElementsByTagName('polyline');
    console.log(poly, line, clas);
    // poly[0].setAttribute('points', '0,0 500,0 700,700 0,700');
    // poly[1].setAttribute('points', '0,0 500,0 700,700 0,700');
    // line[0].setAttribute('points', '259 374 259 351 282 351');
  };

  return (
    <div className="component" id={styles.issue}>
      <button onClick={adjust}> 클릭 </button>
      {/* <div className={styles.test}>
        <IssuePage />
      </div> */}
      <div className={styles.test}>
        <IssuePage2 />
      </div>
      <div className={styles.test2}></div>
      <IssueTest className={styles.divide} />
    </div>
  );
}

export default Issue;
