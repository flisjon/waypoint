FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelLayout: 'compact',
    imageResizeTargetWidth: '30%',
    imageResizeTargetHeight: '30%'
})    


FilePond.parse(document.body)