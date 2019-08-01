//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

registerBlockType( 'mcw-blocks/slidebox-content', {
	title: 'MCW Slidebox Content',
	icon: 'arrow-down',
	category: 'common',
	parent: ['mcw-blocks/slidebox'],

	edit({ className }) {

		return (
			<div className={ className }>
				<strong>Slidebox Content</strong>
				<InnerBlocks />
			</div>
		)
	},

	save({ className }) {
		return (
			<div className={ className }>
				<div className='container'>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
