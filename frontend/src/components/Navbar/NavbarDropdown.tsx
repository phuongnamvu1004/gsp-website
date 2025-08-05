import { Dropdown, type MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';
import { Children, type ReactNode } from "react";

interface NavbarDropdownProps {
  label: string;
  children: ReactNode;
  path: string;
}

export default function NavbarDropdown({ label, children, path }: NavbarDropdownProps) {
  const items: MenuProps['items'] = Children.toArray(children).map((child, index) => ({
    key: index.toString(),
    label: child,
  }));

  return (
    <Dropdown
      menu={{ items }}
      trigger={['hover', 'click']}
      placement="bottomLeft"
      overlayClassName={styles.customDropdownMenu}
    >
      <div className={`${styles.dropdownTrigger} nav-link`} data-path={path}>
        {label}
        <DownOutlined className={styles.dropdownIcon} />
      </div>
    </Dropdown>
  );
}