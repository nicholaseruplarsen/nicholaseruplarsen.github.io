import styles from "../styles/BlogXD.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function BlogXD({ title, author, coverPhoto, datePublished, slug }) {
  return (
    <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03, y: -5 }}
    whileTap={{ scale: 0.98 }}
    >
      <div className={styles.square}>
        <Link href={`/posts/${slug}`}>
          <div>
            <div className={styles.imgContainer}>
              <Image layout="fill" src={coverPhoto.url} alt="" />
            </div>
            <div className={styles.text}>
              <h2>{title}</h2>
                <div className={styles.details}>
                  <div className={styles.author}>
                    <img src={author.avatar.url} alt={author.name} />
                  <h3>{author.name}</h3>
                  </div>
                  <div className={styles.date}>
                    <h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>
                  </div>
                </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogXD;
