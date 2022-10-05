import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

/**
 * For the Shopping ICON we are importing the SVG here and styling it 
 * directly, which is the preferred method. We could also just add
 * svg {
 * width: 24px;
   height: 24px;
 * }
   inside of the CartIconContainer to target all SVG's inside that div.
   
 */
export const CartIconContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
   width: 24px;
   height: 24px;
`;

export const ItemCount = styled.span`
   position: absolute;
   font-size: 10px;
   font-weight: bold;
   bottom: 12px;
`;
