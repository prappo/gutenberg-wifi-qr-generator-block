/**
 * BLOCK: wifi-qrcode-generator
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
// import './editor.scss';
// import './style.scss';

import {CheckboxControl, Panel, PanelBody, SelectControl, TextControl} from '@wordpress/components';

const {RichText, InspectorControls} = wp.blockEditor;

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks

const qrcode = require('wifi-qr-code-generator')

registerBlockType('prappo/block-wifi-qrcode-generator', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('WIFI QRcode'), // Block title.
	icon: <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
		<path d="m488 16h-48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0 -8-8z"/>
		<path d="m24 80a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 0-16h-48a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8z"/>
		<path d="m488 432a8 8 0 0 0 -8 8v40h-40a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8z"/>
		<path d="m24 496h48a8 8 0 0 0 0-16h-40v-40a8 8 0 0 0 -16 0v48a8 8 0 0 0 8 8z"/>
		<path
			d="m48 56v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-144a8 8 0 0 0 -8-8h-144a8 8 0 0 0 -8 8zm16 8h128v128h-128z"/>
		<path d="m168 80h-80a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8zm-8 80h-64v-64h64z"/>
		<path d="m168 336h-80a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8zm-8 80h-64v-64h64z"/>
		<path d="m424 80h-80a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8zm-8 80h-64v-64h64z"/>
		<path
			d="m312 207.5h144a8 8 0 0 0 8-8v-143.5a8 8 0 0 0 -8-8h-144a8 8 0 0 0 -8 8v143.5a8 8 0 0 0 8 8zm8-143.5h128v127.5h-128z"/>
		<path
			d="m48 456a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-144a8 8 0 0 0 -8-8h-144a8 8 0 0 0 -8 8zm16-136h128v128h-128z"/>
		<path d="m232 112a8 8 0 0 0 8-8v-40h8a8 8 0 0 0 0-16h-16a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8z"/>
		<circle cx="280" cy="56" r="8"/>
		<path d="m264 112h16a8 8 0 0 0 8-8v-16a8 8 0 0 0 -16 0v8h-8a8 8 0 0 0 0 16z"/>
		<path d="m280 136h-16a8 8 0 0 0 -8 8v32a8 8 0 0 0 16 0v-24h8a8 8 0 0 0 0-16z"/>
		<path d="m232 208h48a8 8 0 0 0 0-16h-40v-56a8 8 0 0 0 -16 0v64a8 8 0 0 0 8 8z"/>
		<path d="m296 400a8 8 0 0 0 -8 8v40h-24a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8z"/>
		<circle cx="232" cy="456" r="8"/>
		<path d="m232 432a8 8 0 0 0 8-8v-8h24a8 8 0 0 0 0-16h-32a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8z"/>
		<path d="m232 320a8 8 0 0 0 8-8v-40h16a8 8 0 0 0 0-16h-24a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8z"/>
		<path d="m232 240h48v40a8 8 0 0 0 16 0v-48a8 8 0 0 0 -8-8h-56a8 8 0 0 0 0 16z"/>
		<path d="m48 280a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0 -16 0z"/>
		<path d="m88 256a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8h-32a8 8 0 0 0 0 16h24v8a8 8 0 0 0 8 8z"/>
		<path d="m120 224a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0 -8-8z"/>
		<path d="m208 232a8 8 0 0 0 -16 0v40h-56a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8z"/>
		<path d="m464 232a8 8 0 0 0 -8-8h-48a8 8 0 0 0 0 16h40v8a8 8 0 0 0 16 0z"/>
		<circle cx="320" cy="312" r="8"/>
		<path d="m432 280v-16a8 8 0 0 0 -16 0v8h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8z"/>
		<path d="m424 368h-32a8 8 0 0 0 0 16h24v8a8 8 0 0 0 16 0v-16a8 8 0 0 0 -8-8z"/>
		<circle cx="424" cy="424" r="8"/>
		<circle cx="360" cy="376" r="8"/>
		<path d="m392 416h-24v-8a8 8 0 0 0 -16 0v16a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16z"/>
		<path d="m352 256a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8h39a8 8 0 0 0 0-16h-31v-40a8 8 0 0 0 -8-8z"/>
		<path d="m376 224h-56a8 8 0 0 0 -8 8v48a8 8 0 0 0 16 0v-40h48a8 8 0 0 0 0-16z"/>
		<path d="m232 384h64a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8h-64a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8zm8-32h48v16h-48z"/>
		<path
			d="m328 464h128a8 8 0 0 0 8-8v-112a8 8 0 0 0 -8-8h-128a8 8 0 0 0 -8 8v112a8 8 0 0 0 8 8zm8-112h112v96h-112z"/>
		<path d="m288 304h-15a8 8 0 0 0 0 16h15a8 8 0 0 0 0-16z"/>
		<path d="m464 280a8 8 0 0 0 -16 0v24h-24a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8z"/>
	</svg>,
	category: 'widgets',

	attributes: {
		imageData: {
			type: 'string',
		},
		ssid: {
			type: 'string',
			default: 'prappo',
		},
		wifiPassword: {
			type: 'string',
			default: '12345678'
		},
		encryption: {
			type: 'string',
			default: 'WPA',
		},
		hiddenSSID: {
			type: 'boolean',
			default: false,

		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-wifi-qrcode-generator'></p>.
		const {setAttributes, className} = props;

		const pr = qrcode.generateWifiQRCode({
			ssid: props.attributes.ssid,
			password: props.attributes.wifiPassword,
			encryption: props.attributes.encryption,
			hiddenSSID: props.attributes.hiddenSSID,
			outputFormat: {type: 'image/png'}
		})


		pr.then((data) => {

			setAttributes({imageData: data});

		})



		return (
			<div>
				<InspectorControls>
					<Panel>
						<PanelBody title="WIFI QRcode Generator" initialOpen={true}>
							<TextControl
								label="SSID"
								value={props.attributes.ssid}
								onChange={(ssid) => setAttributes({ssid: ssid})}
							/>

							<TextControl
								label="Password"
								value={props.attributes.wifiPassword}
								onChange={(value) => setAttributes({wifiPassword: value})}
							/>


							<SelectControl
								multiple
								label={__('Encryption')}
								multiple={false}
								value={props.attributes.encryption}
								onChange={(value) => {
									setAttributes({encryption: value})
								}}
								options={[

									{value: 'WPA', label: 'WPA / WPA2'},
									{value: 'WEP', label: 'WEP'},
									{value: 'None', label: 'None'},
								]}
							/>

							<CheckboxControl
								label="Hidden ?"
								checked={props.attributes.hiddenSSID}
								onChange={(value) => setAttributes({hiddenSSID: value})}
							/>
						</PanelBody>
					</Panel>
				</InspectorControls>


				<p>SSID : {props.attributes.ssid}</p>
				<p>Password : {props.attributes.wifiPassword}</p>
				<p>Encryption : {props.attributes.encryption}</p>
				<img src={props.attributes.imageData}/>

			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		const {setAttributes, className} = props;

		const pr = qrcode.generateWifiQRCode({
			ssid: props.attributes.ssid,
			password: props.attributes.wifiPassword,
			encryption: props.attributes.encryption,
			hiddenSSID: props.attributes.hiddenSSID,
			outputFormat: {type: 'image/png'}
		})


		pr.then((data) => {

			setAttributes({imageData: data});

		})

		// console.log(props.attributes.imageData);

		return (
			<div>
				<div>
					<p>SSID : {props.attributes.ssid}</p>
					<p>Password : {props.attributes.wifiPassword}</p>
					<p>Encryption : {props.attributes.encryption}</p>
				</div>
				<img src={props.attributes.imageData}/>

			</div>
		);
	},
});
