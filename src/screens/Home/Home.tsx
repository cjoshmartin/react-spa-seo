import React from "react";
import {livingThingsData} from '../../data';
import ThingCard from "../../components/ThingCard/ThingCard";
import ThingContainer from "../../components/ThingContainer/ThingContainer";

import styles from './Home.module.css';
import { Helmet } from "react-helmet-async";

export function Home(props: any) {
    return (
        <div className={styles.home}>
            <Helmet prioritizeSeoTags>
                <title>Home - Living Things</title>
                <meta property="og:title" content="Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house."/>
                <meta
                    name="description"
                    content="Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house." />
            </Helmet>
        <ThingContainer>
            {livingThingsData.map((thing) => {
                return (
                    <ThingCard key={thing?.id + thing.name} {...thing} />
                )
            })}
        </ThingContainer>
</div>
    )
}