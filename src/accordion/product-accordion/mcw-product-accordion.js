const { registerBlockType } = wp.blocks
const { createElement } = wp.element

registerBlockType( 'mcw-blocks/products-accordion', {
	title: 'MCW Products Accordion',
	icon: 'sort',
	category: 'common',
	supports: {
		'align': true
	},

	edit( { className } ) {

		return (
			createElement(
				'h2',
				{
					className: className
				},
				'Product Accordion'
			)
		)
	},

	save() {
		return (
			null
		)
	},
} )
