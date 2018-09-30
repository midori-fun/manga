<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		return {
			loaded: false,
			img: null,
			visible: [true],
			nb_block: this.$route.params.id
		}
	},
	methods: {
		handleScroll(nb_page) {
			let elem = this.$refs[`page_${nb_page}`]
			console.log(elem)
			if(!this.visible[nb_page]) {
				let top = elem.getBoundingClientRect().top
				this.visible[nb_page] = top < window.innerHeight + 100
			}
			if(this.visible[nb_page]) {
				window.removeEventListener('scroll', this.handleScroll)

				this.rpc("block", "read", { nb_block: this.nb_block, nb_page: nb_page+1 }, false).then(r => {
					let newImg = document.createElement("img")
					newImg.src = r.img
					newImg.ref = `page_${nb_page+1}`
					this.$refs.read_manga.appendChild(newImg)

					window.addEventListener('scroll', () => {
						this.handleScroll(nb_page+1)
					})
				})
			}
		}
	},
	watch: {
		visible(v) {
			console.log(`${v} is visible.`)
		}
	},
	created() {
		this.rpc("block", "read", { nb_block: this.nb_block, nb_page: 0 }, true).then(r => {
			this.img = r.img
			console.log("r", r)
			window.addEventListener('scroll', () => {
				this.handleScroll(0)
			})
		}).finally(r => {
			this.loaded = true
		})
	}
}
</script>
