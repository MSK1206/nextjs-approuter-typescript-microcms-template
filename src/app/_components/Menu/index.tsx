'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  NewsTitle,
  BusinessTitle,
  RecruitTitle,
  ContactTitle,
} from '@/app/_Meta/Titles/index'
import {
  BusinessLink,
  ContactLink,
  NewsLink,
  RecruitLink,
} from '@/app/_Meta/MenuLinks'
import cx from 'classnames'
import styles from './index.module.css'

type MenuItem = {
  label: string
  link: string
}

const menuItems: MenuItem[] = [
  { label: `${NewsTitle}`, link: `${NewsLink}` },
  { label: `${BusinessTitle}`, link: `${BusinessLink}` },
  { label: `${RecruitTitle}`, link: `${RecruitLink}` },
  { label: `${ContactTitle}`, link: `${ContactLink}` },
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {menuItems.map((item) => (
            <li className={styles.menulist} key={item.label}>
              <Link
                href={item.link}
                className={styles.itemlink}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          name="button"
          type="button"
          className={cx(styles.button, styles.close)}
          onClick={closeMenu}
        >
          <XMarkIcon className={styles.xmarkicon} />
        </button>
      </nav>
      <button
        name="button"
        type="button"
        className={styles.button}
        onClick={openMenu}
      >
        <Bars3BottomRightIcon className={styles.bbricon} />
      </button>
    </div>
  )
}
