import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment...."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpg"}
              className={styles.image}
              alt="_"
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2323</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
            modi placeat ipsum quod laborum esse? Optio dolores cum adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpg"}
              className={styles.image}
              alt="_"
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2323</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
            modi placeat ipsum quod laborum esse? Optio dolores cum adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpg"}
              className={styles.image}
              alt="_"
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2323</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
            modi placeat ipsum quod laborum esse? Optio dolores cum adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpg"}
              className={styles.image}
              alt="_"
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2323</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
            modi placeat ipsum quod laborum esse? Optio dolores cum adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpg"}
              className={styles.image}
              alt="_"
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2323</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
            modi placeat ipsum quod laborum esse? Optio dolores cum adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
