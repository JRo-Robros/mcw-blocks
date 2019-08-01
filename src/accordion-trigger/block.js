//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

registerBlockType( 'mcw-blocks/accordion-trigger', {
	title: 'MCW Accordion Trigger',
	icon: 'menu',
	category: 'layout',
	supports: {
		'align': true
	},
	parent: ['mcw-blocks/accordion'],

	edit({ className }) {

		return (
			<div className={ className }>
			<p><strong>Accordion Trigger</strong></p>
			<InnerBlocks	/>
			</div>
		)
	},

	save({ className }) {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
				<div className='mcw-accordion-indicator'>
					<div className='btn round'><i className='fa fa-angle-double-down'></i></div>
				</div>
			</div>
		)
	}
} )
