"use client";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/tag";
import styles from "./styles.module.scss";
import { useHomepage } from "../use-homepage";
import { Loading } from "@/components/loading";

function ResultImage() {
  const { isSubmitting, resultPrompt, image, error } = useHomepage();

  if (error) return <p className={styles.error}>{error.message}</p>;
  if (!isSubmitting && !image) return null;

  return (
    <div className={styles.resultImage}>
      <div className={styles.animation}>
        {isSubmitting ? (
          <div className={styles.resultImage}>
            <div className={styles.animation}>
              <Loading />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.content}>
              <p>{resultPrompt}</p>
              <Tag
                className={styles.download}
                title={
                  <Link href={image} target="_blank" download>
                    Download
                  </Link>
                }
              />
            </div>
            <Image src={image} alt={resultPrompt} width={512} height={512} />
          </>
        )}
      </div>
    </div>
  );
}

export { ResultImage };
