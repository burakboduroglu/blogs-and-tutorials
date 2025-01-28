import type { ReactNode } from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_read_notes.svg').default,
    description: <>Build your coding skills with step-by-step, beginner-friendly guides. </>,
  },
  {
    title: 'Blogs',
    Svg: require('@site/static/img/undraw_blog.svg').default,
    description: <>Stay updated with tips, trends, and stories from the world of software.</>,
  },
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_educator.svg').default,
    description: <>Discover and grow with knowledge tailored for developers.</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
