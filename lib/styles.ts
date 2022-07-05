import styled from 'styled-components';

import { Theme } from './types';

export const Modal = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .6);
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Root = styled.div<{ themeName: Theme }>`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 1;
	font-size: 16px;
	text-align: center;
	font-family: arial,verdana,sans-serif;
	box-sizing: content-box;
	-webkit-font-smoothing: antialiased;
	user-select: none;

	.datepicker-header {
		padding: 0 .5em;
		min-height: 2em;
		line-height: 2em;
		font-size: 1.125em;
	}
	.datepicker-navbar {
		padding: 0 .5em .5em .5em;
		overflow: hidden;
	}
	.datepicker-navbar-btn {
		background-color: transparent;
		border: none;
		height: 2.5em;
		line-height: 2.5em;
		float: right;
		padding: 0 1em;
		cursor: pointer;
		&::focus {
			outline: none;
		}
	}
	.datepicker-caption {
		display: flex;
		padding: .5em .25em;
	}
	.datepicker-caption-item {
		flex: 1;
		margin: 0 .25em;
		height: 40px;
		line-height: 40px;
		font-size: 1.2em;
	}
	.datepicker-content {
		display: flex;
		padding: .5em .25em;
	}
	.datepicker-col-1 {
		flex: 1;
		margin: 0 .25em;
	}
	.datepicker-viewport {
		height: 200px;
		position: relative;
		overflow: hidden;
		&::after {
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			pointer-events: none;
		}
	}
	.datepicker-wheel {
		position: absolute;
		height: 40px;
		top: 50%;
		margin-top: -20px;
		width: 100%;
	}
	.datepicker-scroll {
		list-style-type: none;
		padding: 0;
		>li {
			height: 40px;
			line-height: 40px;
			font-size: 1.375em;
			cursor: pointer;
		}
	}
  ${({ themeName }) => themeName === 'default' && `
  	background-color: #f7f7f7;
  	.datepicker-header {
  		color: #4eccc4;
  	}
  	.datepicker-wheel {
  		border-top: 1px solid #4eccc4;
  		border-bottom: 1px solid #4eccc4;
  	}
  	.datepicker-caption-item {
  		color: rgb(59, 59, 59);
  	}
  	.datepicker-scroll {
  		li {
  			color: rgb(59, 59, 59);
  		}
  		li.disabled {
  			color: rgb(191, 191, 191);
  		}
  	}
  	.datepicker-navbar-btn {
  		color: #4eccc4;
  	}
  `}
  
  ${({ themeName }) => themeName === 'dark' && `
  	background-color: #263238;
  	.datepicker-header {
  		color: #50ccc4;
  	}
  	.datepicker-wheel {
  		border-top: 1px solid #50ccc4;
  		border-bottom: 1px solid #50ccc4;
  	}
  	.datepicker-caption-item {
  		color: rgb(201, 203, 204);
  	}
  	.datepicker-scroll {
  		li {
  			color: rgb(201, 203, 204);
  		}
  		li.disabled {
  			color: rgb(87, 96, 100);
  		}
  	}
  	.datepicker-navbar-btn {
  		color: #50ccc4;
  	}
  `}
  ${({ themeName }) => themeName === 'ios' && `
  	background-color: #f7f7f7;
  	.datepicker-col-1 {
  		margin: 0;
  	}
  	.datepicker-header {
  		color: rgb(59, 59, 59);
  		padding: 0 3.5em;
  		+ {
  			.datepicker-content {
  				padding-top: 0;
  			}
  		}
  	}
  	.datepicker-viewport {
  		&::after {
  			background: linear-gradient(#f7f7f7,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f7f7f7);
  		}
  	}
  	.datepicker-wheel {
  		border-top: 1px solid #dbdbdb;
  		border-bottom: 1px solid #dbdbdb;
  	}
  	.datepicker-caption-item {
  		color: rgb(59, 59, 59);
  	}
  	.datepicker-scroll {
  		li {
  			color: rgb(59, 59, 59);
  		}
  		li.disabled {
  			color: rgb(191, 191, 191);
  		}
  	}
  	.datepicker-navbar {
  		position: absolute;
  		z-index: 2;
  		top: 0;
  		left: 0;
  		width: 100%;
  		padding: 0;
  		border-bottom: 1px solid #acacac;
  	}
  	.datepicker-navbar-btn {
  		color: #007aff;
  		&:nth-child(2) {
  			float: left;
  		}
  	}
  	.datepicker-content {
  		padding-top: 48px;
  	}
  	.datepicker-caption {
  		+ {
  			.datepicker-content {
  				padding-top: 0;
  			}
  		}
  	}
  `}
  ${({ themeName }) => themeName === 'android' && `
  	background-color: #f5f5f5;
  	.datepicker-header {
  		color: #31b6e7;
  		border-bottom: 2px solid #31b6e7;
  	}
  	.datepicker-col-1 {
  		margin: 0 .625em;
  	}
  	.datepicker-viewport {
  		&::after {
  			background-image: linear-gradient(#f5f5f5,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f5f5f5);
  		}
  	}
  	.datepicker-wheel {
  		border-top: 2px solid #31b6e7;
  		border-bottom: 2px solid #31b6e7;
  	}
  	.datepicker-caption-item {
  		color: rgb(56, 56, 56);
  	}
  	.datepicker-scroll {
  		li {
  			font-size: 1.125em;
  			color: rgb(56, 56, 56);
  		}
  		li.disabled {
  			color: rgb(188, 188, 188);
  		}
  	}
  	.datepicker-navbar {
  		display: flex;
  		border-top: 1px solid #d9d4d4;
  		padding: 0;
  	}
  	.datepicker-navbar-btn {
  		padding: 0;
  		color: #000;
  		flex: 1;
  		&:nth-child(2) {
  			border-left: 1px solid #d9d4d4;
  		}
  	}
  `}
  ${({ themeName }) => themeName === 'android-dark' && `
  	background-color: #292829;
  	.datepicker-header {
  		color: #31b6e7;
  		border-bottom: 2px solid #31b6e7;
  	}
  	.datepicker-col-1 {
  		margin: 0 .625em;
  	}
  	.datepicker-viewport {
  		&::after {
        background-image: linear-gradient(#282828,rgba(40,40,40,0)52%,rgba(40,40,40,0)48%,#282828);
  		}
  	}
  	.datepicker-wheel {
  		border-top: 2px solid #31b6e7;
  		border-bottom: 2px solid #31b6e7;
  	}
  	.datepicker-caption-item {
  		color: rgb(56, 56, 56);
  		color: rgb(199, 199, 199);
  	}
  	.datepicker-scroll {
  		li {
  			font-size: 1.125em;
  			color: rgb(199, 199, 199);
  		}
  		li.disabled {
  			color: rgb(88, 88, 88);
  		}
  	}
  	.datepicker-navbar {
  		display: flex;
  		border-top: 1px solid #d9d4d4;
  		padding: 0;
  		border-color: #424542;
  	}
  	.datepicker-navbar-btn {
  		padding: 0;
  		color: #000;
  		flex: 1;
  		color: #fff;
  		&:nth-child(2) {
  			border-left: 1px solid #d9d4d4;
  			border-color: #424542;
  		}
  	}
  `}
`;
