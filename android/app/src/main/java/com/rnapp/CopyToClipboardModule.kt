package com.rnapp

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.rtncopytoclipboard.NativeCopyToClipboardSpec

class CopyToClipboardModule(context: ReactApplicationContext?): NativeCopyToClipboardSpec(context) {

    override fun getName(): String {
        return NAME
    }

    override fun copyToClipboard(value: String?) {
        val clipboardManager =
            currentActivity?.let {
                it.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            }
        val clipData: ClipData = ClipData.newPlainText(ClipboardLabel, value)
        clipboardManager?.setPrimaryClip(clipData)
    }

    companion object {
        const val NAME = "RTNCopyToClipboard"
        const val ClipboardLabel = "RnApp"
    }
}