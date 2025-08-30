<template>
  <main class="container">
    <label class="label" id="label" for="input">
      <div class="inner" id="inner">드래그하거나 클릭해서 업로드</div>
    </label>
    <input
      id="input"
      class="input"
      accept="image/*"
      type="file"
      required="true"
      multiple="true"
      hidden="true"
    />
    <p class="preview-title">preview</p>
    <span id="rst"></span>
    <div class="preview" id="preview"></div>
  </main>
</template>

<script>
// import * as tf from '@tensorflow/tfjs' // 버전바뀐후부터는 넣어야 함
import * as mobilenet from '@tensorflow-models/mobilenet'

export default {
  data() {
    return {}
  },
  methods: {},
  components: {},
  mounted() {
    const input = document.getElementById('input')
    const initLabel = document.getElementById('label')

    input.addEventListener('change', (event) => {
      const files = changeEvent(event)
      handleUpdate(files)
    })

    initLabel.addEventListener('mouseover', (event) => {
      event.preventDefault()
      const label = document.getElementById('label')
      label?.classList.add('label--hover')
    })

    initLabel.addEventListener('mouseout', (event) => {
      event.preventDefault()
      const label = document.getElementById('label')
      label?.classList.remove('label--hover')
    })

    document.addEventListener('dragenter', (event) => {
      event.preventDefault()
      // console.log('dragenter')
      if (event.target.className === 'inner') {
        event.target.style.background = '#616161'
      }
    })

    document.addEventListener('dragover', (event) => {
      // console.log('dragover')
      event.preventDefault()
    })

    document.addEventListener('dragleave', (event) => {
      event.preventDefault()
      // console.log('dragleave')
      if (event.target.className === 'inner') {
        event.target.style.background = '#3a3a3a'
      }
    })

    document.addEventListener('drop', (event) => {
      event.preventDefault()
      // console.log('drop')
      if (event.target.className === 'inner') {
        const files = event.dataTransfer?.files
        event.target.style.background = '#3a3a3a'
        handleUpdate([...files])
      }
    })

    function changeEvent(event) {
      const { target } = event
      return [...target.files]
    }
    function handleUpdate(fileList) {
      const preview = document.getElementById('preview')
      // console.log('preview', preview)
      // console.log('fileList', fileList)
      fileList.forEach((file) => {
        // console.log('files', file)
        const reader = new FileReader()
        reader.addEventListener('load', (event) => {
          const img = el('img', {
            className: 'embed-img',
            src: event.target?.result
          })
          const imgContainer = el('div', { className: 'container-img' }, img)
          preview.append(imgContainer)
          const div = document.getElementById('rst')
          div.innerHTML = '분석중...'
          // console.log('img', img)
          mobilenet.load().then((model) => {
            // console.log('model', model, tf)

            model.classify(img).then((predictions) => {
              console.log('predictions', predictions)
              div.innerHTML =
                predictions[0].className +
                '<br>' +
                (predictions[0].probability * 100).toFixed(2) +
                '%'
            })
          })
        })
        reader.readAsDataURL(file)
      })
    }

    function el(nodeName, attributes, ...children) {
      const node =
        nodeName === 'fragment'
          ? document.createDocumentFragment()
          : document.createElement(nodeName)

      Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'events') {
          Object.entries(value).forEach(([type, listener]) => {
            node.addEventListener(type, listener)
          })
        } else if (key in node) {
          try {
            node[key] = value
          } catch (err) {
            node.setAttribute(key, value)
          }
        } else {
          node.setAttribute(key, value)
        }
      })

      children.forEach((childNode) => {
        if (typeof childNode === 'string') {
          node.appendChild(document.createTextNode(childNode))
        } else {
          node.appendChild(childNode)
        }
      })

      return node
    }
  }
}
</script>
<style>
:root {
  --bgColor: #75acbe;
  --hoverBg: #79cae0;
  --text: rgb(255, 255, 255);
}
.container {
  width: clamp(0px, 100%, 512px);
  margin: 32px auto;
  text-align: center;
}
.label {
  width: 100%;
  height: 100%;
  margin: 0px auto;
  cursor: pointer;
  background-color: var(--bgColor);
}

.inner {
  width: 100%;
  height: 128px;
  margin: 64px auto;
  border-radius: 8px;
  font-size: 16px;
  line-height: 128px;
  background-color: var(--bgColor);
  color: var(--text);
}

@media (any-hover: hover) {
  .inner:hover {
    background-color: var(--hoverBg);
  }
}

.label--hover {
  background-color: var(--hoverBg);
}

.preview-title {
  font-size: 32px;
  margin-bottom: 8px;
}

.preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  align-items: center;
  background-color: var(--bgColor);
}

.embed-img {
  width: 100%;
  height: 128px;
  object-position: center;
  object-fit: cover;
  border-radius: 8px;
}
</style>
