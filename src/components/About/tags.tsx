import React from 'react'
import styles from './page.module.css'
import { CplusplusOriginal, COriginal, JavaOriginal, JavascriptOriginal, TypescriptOriginal, PythonOriginal, ReactOriginal, NextjsOriginal, ExpressOriginal, MongodbOriginal, MysqlOriginal, RedisOriginal, AzureOriginal, FirebaseOriginal, ScikitlearnOriginal, TensorflowOriginal, NodejsPlain} from "devicons-react"

export default function Tags() {

    const skills = [
        COriginal,
        CplusplusOriginal,
        PythonOriginal,
        JavaOriginal,
        JavascriptOriginal,
        TypescriptOriginal,
        NodejsPlain,
        ExpressOriginal,
        ReactOriginal,
        NextjsOriginal,
        MysqlOriginal,
        MongodbOriginal,
        FirebaseOriginal,
        RedisOriginal,
        AzureOriginal,
        TensorflowOriginal,
        ScikitlearnOriginal,
    ]

    return (
        <div className={styles.tags}>
            {skills.map((SkillIcon, index) => {
                return <SkillIcon key={index} size={22} />;
            })}
        </div>
    )
}
