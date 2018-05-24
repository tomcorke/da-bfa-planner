import * as React from 'react'

import SummaryRow from '../summary-row'

import * as STYLES from './summary-box.scss'

function mapToArray<T> (map: { [key: string]: T }) { return Object.entries(map).map(([key, value]) => ({ key, value })) }

const SUMMARY_TAG_GROUPS = {
  'Roles': ['tank', 'healer', 'dps'],
  'DPS': ['ranged', 'melee'],
  'Armour type': ['cloth', 'leather', 'mail', 'plate']
}

const getTags = (selections: SummarySelection[]) => selections.map(selection => selection.tags)

function flatten<T> (nestedItems: T[][]) { return nestedItems.reduce((flat, items) => flat.concat(items), []) }

function sumBySelector<T> (items: T[], selector: (item: T) => any): { [key: string]: number } {
  return items
    .reduce((sums, item) => ({
      ...sums,
      [selector(item)]: (sums[selector(item)] || 0) + 1
    }), {})
}

const sumTags = (tags: string[]) => sumBySelector(tags, tag => tag)

const sumSelectionTags = (selections: SummarySelection[]) => sumTags(flatten(getTags(selections)))

const getClasses = (selections: SummarySelection[]) => selections
  .map(selection => selection.class)

const sumClasses = (classes: string[]) => sumBySelector(classes, c => c)

const sumSelectionClasses = (selections: SummarySelection[]) => sumClasses(getClasses(selections))

export interface SummarySelection {
  tags: string[]
  class: string
}

interface SummaryBoxProps {
  title: string,
  allSelections: SummarySelection[]
}

const SummaryBox = ({ title, allSelections }: SummaryBoxProps) => {
  const tags = sumSelectionTags(allSelections)
  const classes = sumSelectionClasses(allSelections)

  return (
    <div className={STYLES.summaryBox}>
      <div className={STYLES.summaryTitle}>{title}</div>
      {Object.entries(SUMMARY_TAG_GROUPS).map(([title, groupTags]) => {
        return <SummaryRow
          key={title}
          title={title}
          values={groupTags.map(t => ({ name: t, count: tags[t] || 0 }))} />
      })}
      <SummaryRow
        key='classes'
        title='Classes'
        values={mapToArray(classes)
          .map(i => ({ name: i.key, count: i.value }))
          .sort((a, b) => a.name < b.name ? -1 : 1)} />
    </div>
  )
}

export default SummaryBox