export interface Skill {
    name: string
    level: 1 | 2 | 3 | 4 | 5;
}

export default [
    {
        name: 'React',
        level: 4
    },
    {
        name: 'Vue',
        level: 5
    },
    {
        name: 'Next',
        level: 4
    },
    {
        name: 'Neo4j',
        level: 3
    },
    {
        name: 'Node',
        level: 3
    },
    {
        name: 'CSS/SCSS',
        level: 4
    },
    {
        name: 'Python',
        level: 3
    },
] as Skill[]