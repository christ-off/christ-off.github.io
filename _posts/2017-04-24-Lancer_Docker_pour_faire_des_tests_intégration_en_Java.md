---
layout: post
title: Lancer Docker pour faire des tests d'intégration (Java) ?
excerpt: Si vous avez déjà écris des tests d'intégration, vous avez probablement rencontré des difficultés à faire tourner vos dépendances.
permalink: '/docker_tests_integration'
category: dev
published: true
tags: ['devoxx', 'docker', 'junit5']
image: /assets/posts/junit5_docker.png
---

# Lancer Docker pour faire des tests d'intégration (Java) ?

Je suis en train de développer pour le fun quelques Lambdas qui doivent s'exécuter dans une stack AWS en utilisant entre autres DynamoDB.  
Je voulais tester (test d'intégration donc) de concert plusieurs Lambdas : une qui persiste un binaire et l'autre qui le lit.  

## Comment faire ?

Lancer DynamoDB en local...  
C'est possible : les librairies sont disponibles et le lancement en local avec une simple ligne de commande est facile et documenté.  
Mais je voulais toujours retrouver un contexte propre pour des tests reproductibles.

## La solution

Autre solution Docker...  
Mais comment lancer facilement un container Docker lors de tests ?  
Et bien .... J'avais vu la conférence JUnit + Docker par Xavier Detant et Vincent Demeester

* La vidéo : <https://www.youtube.com/watch?v=4RsJjE-K3iA>
* Les Slides : <http://vincent.demeester.fr/devoxxfr-junit-docker/#/3>
* Le code : <https://github.com/FaustXVI/junit5-docker>
* La documentation : <https://faustxvi.github.io/junit5-docker/>

Et hop une petite annotation  
`@Docker( image = "cnadiminti/dynamodb-local", ports = @Port(exposed = 8000, inner = 8000), newForEachCase = false )` devant ma classe de test et le tour est joué.
Simple propre efficace !

Allez voir la documentation pour vous rendre compte à quel point la mise en oeuvre est simple : <https://faustxvi.github.io/junit5-docker/>  
Il vous faudra [JUnit 5.x](http://junit.org/junit5/) Bons tests les amis !