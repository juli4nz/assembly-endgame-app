import './BadgeList.css';

import Badge from './Badge';
import { type Language } from '../data/languages';
import { useState, type PropsWithChildren } from 'react';
import { nanoid } from 'nanoid';

type LanguageItem = Language & {
  id: string;
  isDead: boolean;
};

type Props = PropsWithChildren & {
  deadCount?: number;
  items: Language[];
};

export default function BadgeList({ items, deadCount = 0 }: Props) {
  const [languageItem, _setLanguageItem] = useState<LanguageItem[]>(() =>
    items.map(v => ({ ...v, id: nanoid(), isDead: false }))
  );

  const languageItemList = languageItem.map((v, idx) => (
    <Badge
      key={v.id}
      disabled={idx < deadCount ? true : v.isDead}
      bgColor={v.backgroundColor}
      variant={v.variant}
    >
      {v.label}
    </Badge>
  ));

  return <section className="badge-list">{languageItemList}</section>;
}
