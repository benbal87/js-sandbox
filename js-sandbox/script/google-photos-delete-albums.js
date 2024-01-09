function deleteAlbums(n = 1) {
  let counter = 0
  const triggerMouseEvent = (node, eventType) => {
    node.dispatchEvent(
      new MouseEvent(
        eventType,
        {
          bubbles: true,
          cancelable: true,
          view: window
        }
      )
    )
  }

  const getAlbumSettingsBtn = () =>
    document.querySelector('div[jscontroller=ezoDxc] > div[jscontroller=iSvg6e]')

  const clickOnSettingsBtn = () => {
    getAlbumSettingsBtn()?.click()
  }

  const getSettingsDeleteBtn = () =>
    document.querySelector('div[jscontroller="kBIE1e"]')?.parentElement

  const getDeleteBtn = () =>
    Array.from(
      document.querySelectorAll('div[role="dialog"] span') ?? []
    )?.find(n => n.innerText === 'Delete')

  const observer = new MutationObserver(mutations => {
    // console.log('mutations', mutations)

    const settingsDeleteBtn = getSettingsDeleteBtn()
    if (document.contains(settingsDeleteBtn)) {
      setTimeout(() => {
        if (counter <= n) {
          // console.log(
          //   'triggering mousedown and mouseup events (AlbumSettingsPopup)')
          triggerMouseEvent(settingsDeleteBtn, 'mousedown')
          triggerMouseEvent(settingsDeleteBtn, 'mouseup')
        } else {
          console.log('observer.disconnect() #1')
          observer.disconnect()
        }
      }, 1000)
    }

    const deleteBtn = getDeleteBtn()
    if (document.contains(deleteBtn)) {
      setTimeout(() => {
        if (counter <= n) {
          // console.log('clicking on node (DeleteAlbumModal)')
          // console.log(deleteBtn)
          deleteBtn.click()
        } else {
          console.log('observer.disconnect() #2')
          observer.disconnect()
        }
      }, 1000)
    }

    if (mutations[0].removedNodes[0].className === 'VfPpkd-Ng57nc VfPpkd-Ng57nc-OWXEXe-M1Soyc VOBzC TFhMef PzCPDd OanAid') {
      console.log(`+++ counter increased: [${counter}]`)
      counter++
      if (counter < n) {
        console.log('### clicking on settings button')
        clickOnSettingsBtn()
      } else {
        console.log('--- observer.disconnect() #3')
        observer.disconnect()
      }
    }
  })

  observer.observe(
    document,
    { attributes: false, childList: true, characterData: false, subtree: true }
  )

  clickOnSettingsBtn()
}

deleteAlbums(2000)
