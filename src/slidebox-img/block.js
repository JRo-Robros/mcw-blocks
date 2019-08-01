//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

const TEMPLATE = [
	['core/image', {}]
]

registerBlockType( 'mcw-blocks/slidebox-img', {
	title: 'MCW Slidebox Image',
	icon: 'arrow-down',
	category: 'common',
	parent: ['mcw-blocks/slidebox'],

	edit({ className }) {

		return (
			<div className={ className }>
				<strong>Slidebox Cover Image</strong>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="all"
				/>
			</div>
		)
	},

	save({ className }) {
		className += " slidebox"
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		)
	},
} )
