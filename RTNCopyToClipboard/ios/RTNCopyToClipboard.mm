#import "RTNCopyToClipboardSpec.h"
#import "RTNCopyToClipboard.h"

@implementation RTNCopyToClipboard

RCT_EXPORT_MODULE()

- (void)copyToClipboard:(NSString *)value{
  UIPasteboard * pasteboard=[UIPasteboard generalPasteboard];
  [pasteboard setString:text];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCopyToClipboardSpecJSI>(params);
}

@end