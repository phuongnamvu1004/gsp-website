import { Dropdown, type MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';
import { Children, type ReactNode } from "react";

interface NavbarDropdownProps {
  label: string;
  children: ReactNode;
}

export default function NavbarDropdown({ label, children }: NavbarDropdownProps) {
  const items: MenuProps['items'] = Children.toArray(children).map((child, index) => ({
    key: index.toString(),
    label: child,
  }));

  return (
    <Dropdown
      menu={{ items }}
      trigger={['hover', 'click']}
      placement="bottomRight"
      arrow
      overlayClassName={styles.customDropdownMenu}
    >
      <div className={`${styles.dropdownTrigger} nav-link`}>
        {label}
        <DownOutlined className={styles.dropdownIcon} />
      </div>
    </Dropdown>
  );
}