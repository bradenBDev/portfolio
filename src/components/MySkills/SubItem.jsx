import React from "react";
import { List } from "semantic-ui-react";
import styles from "./styles.module.css";

function SubItem({item}) {

  const subBulletPoint = "⁃";

  return (
    <List.Item as="li" className={styles.li} value={subBulletPoint}>
      {item}
    </List.Item>
  )
}

export default SubItem;