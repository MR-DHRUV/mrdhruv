import React from 'react'
import styles from './page.module.css'
import { CplusplusOriginal, JavaOriginal, JavascriptOriginal, TypescriptOriginal, PythonOriginal, ReactOriginal, NextjsOriginal, MongodbOriginal, MysqlOriginal, RedisOriginal, AzureOriginal, FirebaseOriginal, ScikitlearnOriginal, TensorflowOriginal, NodejsPlain, GoOriginal, PostgresqlOriginal, DockerPlain, KubernetesOriginal, CsharpOriginal } from "devicons-react"

export default function Tags() {

    const skills = [
        CplusplusOriginal,
        CsharpOriginal,
        PythonOriginal,
        JavaOriginal,
        GoOriginal,
        JavascriptOriginal,
        TypescriptOriginal,
        NodejsPlain,
        ReactOriginal,
        NextjsOriginal,
        MysqlOriginal,
        PostgresqlOriginal,
        MongodbOriginal,
        FirebaseOriginal,
        RedisOriginal,
        DockerPlain,
        KubernetesOriginal,
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
